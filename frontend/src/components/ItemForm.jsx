import { useState } from "react";

function ItemForm({ initialValues, onSubmit, submitText }) {
  const [formData, setFormData] = useState(
    initialValues || {
      name: "",
      category: "",
      price: "",
      status: "",
      description: "",
      imageUrl: "",
    }
  );

  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  
  const handleSubmit = (e) => {
    e.preventDefault();

    const priceValue = Number(formData.price);

    
    if (
      !formData.name ||
      !formData.category ||
      !formData.status ||
      !formData.description
    ) {
      alert("Please fill all required fields");
      return;
    }

    
    if (formData.price === "" || isNaN(priceValue) || priceValue < 0) {
      alert("Price must be a valid number");
      return;
    }
    onSubmit({
      ...formData,
      price: priceValue,
    });
  };

  return (
    <form className="form-card" onSubmit={handleSubmit}>
      <h2>{submitText}</h2>

      <label>Item Name</label>
      <input
        name="name"
        value={formData.name}
        onChange={handleChange}
        required
      />

      <label>Category</label>
      <input
        name="category"
        value={formData.category}
        onChange={handleChange}
        required
      />

      <label>Price</label>
      <input
        type="number"
        name="price"
        value={formData.price}
        onChange={handleChange}
        required
      />

      <label>Availability Status</label>
      <input
        name="status"
        value={formData.status}
        onChange={handleChange}
        required
      />

      <label>Description</label>
      <textarea
        name="description"
        rows="4"
        value={formData.description}
        onChange={handleChange}
        required
      />

      <label>Image URL</label>
      <input
        name="imageUrl"
        value={formData.imageUrl}
        onChange={handleChange}
      />

      <button className="btn primary" type="submit">
        {submitText}
      </button>
    </form>
  );
}

export default ItemForm;