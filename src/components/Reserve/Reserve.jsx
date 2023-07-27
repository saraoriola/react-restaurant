import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './Reserve.css';

const Reserve = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    date: null,
    time: '',
    guests: 1,
  });

  const handleDateChange = (date) => {
    setSelectedDate(date);
    setFormData({
      ...formData,
      date: date,
    });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem('reservationData', JSON.stringify(formData));
    console.log('Datos del formulario:', formData);
  };

  return (
    <div className="reserve-container">
      <h2>Reserva tu mesa</h2>
      <form className="reserve-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Nombre:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Fecha:</label>
          <DatePicker
            selected={selectedDate}
            onChange={handleDateChange}
            dateFormat="dd/MM/yyyy"
            placeholderText="Selecciona una fecha"
            minDate={new Date()}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="time">Hora:</label>
          <input
            type="time"
            id="time"
            name="time"
            value={formData.time}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="guests">Número de personas:</label>
          <input
            type="number"
            id="guests"
            name="guests"
            min="1"
            value={formData.guests}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Reservar</button>
      </form>
    </div>
  );
};

export default Reserve;
