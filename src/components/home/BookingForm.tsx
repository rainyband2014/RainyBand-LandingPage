import React, { useState } from 'react';

interface FormData {
  phoneOrZalo: string;
  email: string;
  showType: string;
  expectedDate: string;
  notes: string;
}

export default function BookingForm() {
  const [formData, setFormData] = useState<FormData>({
    phoneOrZalo: '',
    email: '',
    showType: 'Café acoustic',
    expectedDate: '',
    notes: ''
  });

  const [error, setError] = useState<string>('');
  const [success, setSuccess] = useState<boolean>(false);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  
  // Honeypot field
  const [website, setWebsite] = useState<string>('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    if (name === 'website') {
      setWebsite(value);
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
    if (error) setError('');
    if (success) setSuccess(false);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate cơ bản ở client (chi tiết sẽ do server lo)
    if (!formData.phoneOrZalo.trim() && !formData.email.trim()) {
      setError('Vui lòng nhập ít nhất Số điện thoại/Zalo hoặc Email để chúng tôi có thể liên hệ.');
      return;
    }

    setIsSubmitting(true);
    setError('');

    try {
      const response = await fetch('/api/booking', {
        method: 'POST',
        headers: {
          'Content-Type': 'text/plain;charset=utf-8'
        },
        body: JSON.stringify({
          phone: formData.phoneOrZalo,
          email: formData.email,
          eventType: formData.showType,
          eventDate: formData.expectedDate,
          note: formData.notes,
          website: website // field ẩn để server bắt honeypot
        })
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(data.error || 'Có lỗi xảy ra.');
      }

      setSuccess(true);
      setFormData({
        phoneOrZalo: '',
        email: '',
        showType: 'Café acoustic',
        expectedDate: '',
        notes: ''
      });
      setWebsite('');
    } catch (err: any) {
      console.error('Error submitting form:', err);
      setError(err.message || 'Có lỗi xảy ra, vui lòng thử lại hoặc liên hệ trực tiếp qua Zalo/Hotline.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5 w-full">
      {/* Field honeypot chống bot ẩn với người dùng */}
      <div style={{ position: 'absolute', left: '-9999px' }} aria-hidden="true">
        <label htmlFor="website">Trang web của bạn (để trống)</label>
        <input 
          type="text" 
          id="website" 
          name="website" 
          tabIndex={-1} 
          value={website} 
          onChange={handleChange} 
          autoComplete="off" 
        />
      </div>
      {success && (
        <div className="p-4 bg-brand-100 text-brand-800 rounded-xl text-sm font-medium">
          Gửi yêu cầu thành công! Đội ngũ Rainy Band sẽ liên hệ với bạn trong thời gian sớm nhất.
        </div>
      )}

      {error && (
        <div className="p-4 bg-red-50 text-red-600 rounded-xl text-sm font-medium">
          {error}
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div className="flex flex-col">
          <label htmlFor="phoneOrZalo" className="text-sm font-medium text-neutral-text mb-1.5">Số điện thoại / Zalo <span className="text-red-500">*</span></label>
          <input 
            type="text" 
            id="phoneOrZalo"
            name="phoneOrZalo"
            value={formData.phoneOrZalo}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl border border-neutral-text/20 bg-neutral-bg focus:bg-white focus:border-brand-600 focus:ring-1 focus:ring-brand-600 outline-none transition-colors text-neutral-text"
            placeholder="09xx xxx xxx"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="email" className="text-sm font-medium text-neutral-text mb-1.5">Email</label>
          <input 
            type="email" 
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl border border-neutral-text/20 bg-neutral-bg focus:bg-white focus:border-brand-600 focus:ring-1 focus:ring-brand-600 outline-none transition-colors text-neutral-text"
            placeholder="example@gmail.com"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div className="flex flex-col">
          <label htmlFor="showType" className="text-sm font-medium text-neutral-text mb-1.5">Loại show</label>
          <select 
            id="showType"
            name="showType"
            value={formData.showType}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl border border-neutral-text/20 bg-neutral-bg focus:bg-white focus:border-brand-600 focus:ring-1 focus:ring-brand-600 outline-none transition-colors text-neutral-text appearance-none"
          >
            <option value="Café acoustic">Café acoustic</option>
            <option value="Sự kiện/Khai trương">Sự kiện/Khai trương</option>
            <option value="Tiệc cưới">Tiệc cưới</option>
            <option value="Sinh nhật/Tiệc riêng">Sinh nhật/Tiệc riêng</option>
            <option value="Khác">Khác</option>
          </select>
        </div>
        <div className="flex flex-col">
          <label htmlFor="expectedDate" className="text-sm font-medium text-neutral-text mb-1.5">Ngày dự kiến</label>
          <input 
            type="date" 
            id="expectedDate"
            name="expectedDate"
            value={formData.expectedDate}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl border border-neutral-text/20 bg-neutral-bg focus:bg-white focus:border-brand-600 focus:ring-1 focus:ring-brand-600 outline-none transition-colors text-neutral-text"
          />
        </div>
      </div>

      <div className="flex flex-col">
        <label htmlFor="notes" className="text-sm font-medium text-neutral-text mb-1.5">Ghi chú nhanh</label>
        <textarea 
          id="notes"
          name="notes"
          value={formData.notes}
          onChange={handleChange}
          rows={4}
          className="w-full px-4 py-3 rounded-xl border border-neutral-text/20 bg-neutral-bg focus:bg-white focus:border-brand-600 focus:ring-1 focus:ring-brand-600 outline-none transition-colors text-neutral-text resize-none"
          placeholder="Mô tả ngắn về không gian, quy mô, thời lượng, số lượng khách, thể loại nhạc..."
        ></textarea>
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-brand-600 hover:bg-brand-500 text-white font-bold py-3.5 px-4 rounded-xl transition-all hover:scale-[1.02] active:scale-[0.98] disabled:opacity-70 disabled:hover:scale-100 disabled:active:scale-100 mt-2"
      >
        {isSubmitting ? 'Đang gửi...' : 'Gửi yêu cầu'}
      </button>
    </form>
  );
}
