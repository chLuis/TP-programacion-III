import { useToast } from "../toast";
import { InteractiveHoverButton } from "../magicui/interactive-hover-button";
import emailjs from '@emailjs/browser';

export default function ContactForm() {
  const { showToast, ToastComponent } = useToast()

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    const formData = new FormData(form)
    const formValues = Object.fromEntries(formData.entries())
    try {
      const envio = await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE,
        import.meta.env.VITE_EMAILJS_TEMPLATE,
        formValues,
        {publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_QUI })
      if(envio.status === 200){
        showToast({
          title: 'Enviado',
          text: 'Tu email fue enviado correctamente.',
          result: 'success'
        })
        form.reset()
      }
    } catch (error) {
      console.log(error);
      showToast({
          title: 'Error',
          text: 'Hubo un problema con el envío del email.',
          result: 'error'
        })
    }
  }

  return (
    <section id="contact" className="max-w-7xl mx-auto w-full grid grid-cols-6 gap-6 px-4 md:px-12">
      {ToastComponent}
      <h2 className="text-4xl font-black text-center pt-8 pb-4 col-span-6">Contacto</h2>
      <div className="col-span-6 md:col-span-2 w-full flex flex-col gap-2">
        <p>Si tenés una idea, proyecto o simplemente querés charlar sobre cómo puedo ayudarte con desarrollo web, no dudes en contactarme.</p>
        <p>Estoy abierto a propuestas.</p>
        <div>
          
        </div>
      </div>
      <form className="w-full col-span-6 md:col-span-4" onSubmit={(e) => handleSubmit(e)}>
        <div className="relative z-0 w-full mb-5 group">
          <input
            type="name"
            name="name"
            id="name"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required
          />
          <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
            Nombre
          </label>
        </div>
        <div className="relative z-0 w-full mb-5 group">
          <input
            type="email"
            name="email"
            id="email"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required
          />
          <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
            Correo electrónico
          </label>
        </div>
        <div className="relative z-0 w-full mb-5 group">
          <input
            type="text"
            name="subject"
            id="subject"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required
          />
          <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
            Asunto
          </label>
        </div>
        <div className="relative z-0 w-full mb-5 group">
          <textarea
            rows={6}
            name="message"
            id="floating_text"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required
          />
          <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
            Mensaje
          </label>
        </div>
        <InteractiveHoverButton type="submit" className="border-blue-600">
          Enviar mensaje
        </InteractiveHoverButton>
      </form>
    </section>
  );
}
