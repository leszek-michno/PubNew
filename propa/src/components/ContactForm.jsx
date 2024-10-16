import '../assets/styles/ContactForm.scss';
import Swal from 'sweetalert2';

const ContactForm = () => {

    const onSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
    
        formData.append("access_key", "1c94ca8e-6fdf-48d0-ab90-dd14ed32ce90");
    
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
    
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: json
        }).then((res) => res.json());
    
        if (res.success) {
            Swal.fire({
                title: "Poszło!",
                text: "Twoja wiadomość została wysłana!",
                icon: "success"
            }).then(() => {
                e.target.reset();
            });
        }
    };

    return (
        <section className="contactForm">
          <form onSubmit={onSubmit}>
            <h2>Napisz do nas</h2>
            <div className="input-box">
              <label htmlFor="">Twoje imię</label>
              <input type="text" placeholder="wpisz imię" name='name' required/>
            </div>
            <div className="input-box">
              <label htmlFor="">Twój e-mail adres</label>
              <input type="email" placeholder="wpisz swój e-mail adres" name='email' required/>
            </div>
            <div className="input-box">
              <label>Twoja wiadomość</label>
              <textarea type="text" name="message" placeholder='wpisz swoją wiadomość' required/>
            </div>
            <button type='submit'>wyślij wiadomość</button>
          </form>
        </section>
    );
};

export default ContactForm;
