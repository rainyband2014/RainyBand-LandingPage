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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (error) setError('');
    if (success) setSuccess(false);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const webhookUrl = import.meta.env.PUBLIC_GOOGLE_SHEETS_WEBHOOK_URL;
    if (!webhookUrl) {
      console.error('PUBLIC_GOOGLE_SHEETS_WEBHOOK_URL chưa được cấu hình trong .env');
      setError('Hệ thống đang bảo trì, vui lòng liên hệ trực tiếp qua Zalo hoặc Hotline.');
      return;
    }

    // Validate
    if (!formData.phoneOrZalo.trim() && !formData.email.trim()) {
      setError('Vui lòng nhập ít nhất Số điện thoại/Zalo hoặc Email để chúng tôi có thể liên hệ.');
      return;
    }

    if (formData.email && !/^\S+@\S+\.\S+$/.test(formData.email)) {
      setError('Email không đúng định dạng.');
      return;
    }

    setIsSubmitting(true);
    setError('');

    try {
      const response = await fetch(webhookUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'text/plain;charset=utf-8'
        },
        body: JSON.stringify({
          phone: formData.phoneOrZalo,
          email: formData.email,
          eventType: formData.showType,
          eventDate: formData.expectedDate,
          note: formData.notes
        })
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      setSuccess(true);
      setFormData({
        phoneOrZalo: '',
        email: '',
        showType: 'Café acoustic',
        expectedDate: '',
        notes: ''
      });
    } catch (err) {
      console.error('Error submitting form:', err);
      setError('Có lỗi xảy ra, vui lòng thử lại hoặc liên hệ trực tiếp qua Zalo/Hotline.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5 w-full">
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
        className={`w-full py-4 mt-2 font-bold rounded-xl transition-colors text-base ${
          isSubmitting 
            ? 'bg-neutral-text/20 text-neutral-text/50 cursor-not-allowed' 
            : 'bg-brand-600 hover:bg-brand-700 text-white'
        }`}
      >
        {isSubmitting ? 'Đang gửi...' : 'Gửi yêu cầu booking'}
      </button>
    </form>
  );
}
