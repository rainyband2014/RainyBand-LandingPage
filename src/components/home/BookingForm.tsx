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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (error) setError('');
    if (success) setSuccess(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate
    if (!formData.phoneOrZalo.trim() && !formData.email.trim()) {
      setError('Vui lòng nhập ít nhất Số điện thoại/Zalo hoặc Email để chúng tôi có thể liên hệ.');
      return;
    }

    if (formData.email && !/^\S+@\S+\.\S+$/.test(formData.email)) {
      setError('Email không đúng định dạng.');
      return;
    }

    // TODO: Thực hiện gọi API lưu thông tin booking ở đây
    console.log('Form submitted:', formData);
    
    // Giả lập thành công
    setSuccess(true);
    setFormData({
      phoneOrZalo: '',
      email: '',
      showType: 'Café acoustic',
      expectedDate: '',
      notes: ''
    });
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
        className="w-full py-4 mt-2 bg-brand-600 hover:bg-brand-700 text-white font-bold rounded-xl transition-colors text-base"
      >
        Gửi yêu cầu booking
      </button>
    </form>
  );
}
