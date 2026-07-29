export interface Env {
  GOOGLE_SHEETS_WEBHOOK_URL: string;
}

export interface EventContext<Env = any, Params = any, Data = any> {
  request: Request;
  functionPath: string;
  waitUntil: (promise: Promise<any>) => void;
  next: (input?: Request | string, init?: RequestInit) => Promise<Response>;
  data: Data;
  env: Env;
  params: Params;
}

export type PagesFunction<Env = any, Params = any, Data = any> = (
  context: EventContext<Env, Params, Data>
) => Response | Promise<Response>;


interface BookingPayload {
  phone?: string;
  email?: string;
  eventType?: string;
  eventDate?: string;
  note?: string;
}

export const onRequestPost: PagesFunction<Env> = async (context) => {
  try {
    const request = context.request;
    const env = context.env;
    
    // Parse the request body
    const bodyText = await request.text();
    let payload: BookingPayload & { website?: string };
    
    try {
      payload = JSON.parse(bodyText);
    } catch (e) {
      return new Response(JSON.stringify({ success: false, error: "Invalid JSON body" }), {
        status: 400,
        headers: { "Content-Type": "application/json" }
      });
    }

    // 1. Chống spam bằng honeypot field
    // Nếu field 'website' có data, có khả năng cao đây là bot điền tự động.
    if (payload.website && payload.website.trim() !== '') {
      // Trả về success true để đánh lừa bot, nhưng không thực hiện lưu data
      return new Response(JSON.stringify({ success: true }), {
        status: 200,
        headers: { "Content-Type": "application/json" }
      });
    }

    // 2. Validate dữ liệu
    const phone = payload.phone?.trim();
    const email = payload.email?.trim();
    const eventType = payload.eventType?.trim();
    const eventDate = payload.eventDate?.trim();
    const note = payload.note?.trim();

    // Validate phone (Bắt buộc, 10 số đầu 0)
    if (!phone) {
      return new Response(JSON.stringify({ success: false, error: "Vui lòng cung cấp số điện thoại." }), { status: 400, headers: { "Content-Type": "application/json" } });
    }
    if (!/^0\d{9}$/.test(phone)) {
      return new Response(JSON.stringify({ success: false, error: "Số điện thoại không hợp lệ." }), { status: 400, headers: { "Content-Type": "application/json" } });
    }

    // Validate email (Nếu có)
    if (email && !/^\S+@\S+\.\S+$/.test(email)) {
      return new Response(JSON.stringify({ success: false, error: "Email không đúng định dạng." }), { status: 400, headers: { "Content-Type": "application/json" } });
    }

    // Validate eventType (Bắt buộc)
    if (!eventType) {
      return new Response(JSON.stringify({ success: false, error: "Vui lòng chọn loại show." }), { status: 400, headers: { "Content-Type": "application/json" } });
    }

    // Validate eventDate (Không được là quá khứ)
    if (eventDate) {
      const selectedDate = new Date(eventDate);
      const today = new Date();
      today.setHours(0, 0, 0, 0); // Reset time to midnight for comparison
      if (selectedDate < today) {
        return new Response(JSON.stringify({ success: false, error: "Ngày dự kiến không thể là ngày trong quá khứ." }), { status: 400, headers: { "Content-Type": "application/json" } });
      }
    }

    // 3. Rate Limit (TODO)
    // TODO: nếu cần rate limit nghiêm ngặt hơn, cân nhắc dùng Cloudflare KV để lưu timestamp submit gần nhất theo IP
    // const clientIP = request.headers.get('CF-Connecting-IP');

    // 4. Gửi dữ liệu tới Google Apps Script Webhook
    if (!env.GOOGLE_SHEETS_WEBHOOK_URL) {
       console.error("GOOGLE_SHEETS_WEBHOOK_URL environment variable is missing.");
       return new Response(JSON.stringify({ success: false, error: "Hệ thống chưa được cấu hình hoàn chỉnh." }), { status: 500, headers: { "Content-Type": "application/json" } });
    }

    const appsScriptResponse = await fetch(env.GOOGLE_SHEETS_WEBHOOK_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'text/plain;charset=utf-8' // Giữ text/plain để tránh CORS preflight ở Google
      },
      body: JSON.stringify({
        phone,
        email,
        eventType,
        eventDate,
        note
      }) // Không gửi field honeypot 'website' sang Google
    });

    if (!appsScriptResponse.ok) {
       console.error("Apps Script responded with error:", await appsScriptResponse.text());
       throw new Error("Apps Script request failed");
    }

    // 5. Trả về thành công
    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { "Content-Type": "application/json" }
    });

  } catch (error) {
    console.error("Internal Server Error in booking function:", error);
    return new Response(JSON.stringify({ success: false, error: "Có lỗi hệ thống, vui lòng thử lại sau." }), {
      status: 500,
      headers: { "Content-Type": "application/json" }
    });
  }
};
