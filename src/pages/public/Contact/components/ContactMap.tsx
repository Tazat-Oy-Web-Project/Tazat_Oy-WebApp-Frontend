// ---- Contact Map Component ---- //

function ContactMap() {
  return (
    <div className="w-full h-[300px] bg-white rounded-xl shadow-[0_4px_15px_rgb(0,0,0,0.1)] hover:shadow-[0_10px_30px_rgb(0,0,0,0.2)] overflow-hidden border-2 border-gray-300 transition-all duration-300">
      <iframe 
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1746.2589562826354!2d25.500124217763967!3d65.00950399999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4681cdbae5178bbb%3A0x47e18d5d98103083!2sYlioppilaantie%208%2C%2090130%20Oulu!5e0!3m2!1sen!2sfi!4v1732442400000!5m2!1sen!2sfi"
        className="w-full h-full"
        style={{ border: 0 }}
        allowFullScreen={true}
        loading="lazy" 
        referrerPolicy="no-referrer-when-downgrade"
        title="Tazat Oy Location"
      ></iframe>
    </div>
  );
}

export default ContactMap;
