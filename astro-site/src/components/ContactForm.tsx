import { useForm } from "react-hook-form";

type ContactFormValues = {
  email: string;
  subject: string;
  message: string;
};

export const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactFormValues>();

  const onSubmit = handleSubmit((values) => {
    window.location.href = `mailto:mail@benstokoe.co.uk?subject=${encodeURIComponent(
      values.subject,
    )}&body=${encodeURIComponent(`${values.message}\n\n(from ${values.email})`)}`;
  });

  return (
    <div className="py-8 lg:py-16 px-4 w-1/2">
      <form onSubmit={onSubmit} className="space-y-8">
        <div>
          <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-300">
            Your email
          </label>
          <input
            type="email"
            id="email"
            className="shadow-sm bg-gray-700 border border-gray-600 text-white text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
            placeholder="name@example.com"
            {...register("email", { required: true })}
          />
          {errors.email && <p className="mt-1 text-sm text-error">Email is required</p>}
        </div>

        <div>
          <label htmlFor="subject" className="block mb-2 text-sm font-medium text-gray-300">
            Subject
          </label>
          <input
            type="text"
            id="subject"
            className="block p-3 w-full text-sm text-white bg-gray-700 rounded-lg border border-gray-600 shadow-sm focus:ring-primary-500 focus:border-primary-500"
            placeholder="Let me know how I can help you"
            {...register("subject", { required: true })}
          />
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-400">
            Your message
          </label>
          <textarea
            id="message"
            rows={6}
            className="block p-2.5 w-full text-sm text-white bg-gray-700 rounded-lg shadow-sm border border-gray-600 focus:ring-primary-500 focus:border-primary-500"
            placeholder="Leave a comment..."
            {...register("message", { required: true })}
          />
        </div>

        <button
          type="submit"
          className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-primary sm:w-fit hover:bg-secondary focus:ring-4 focus:outline-none focus:ring-primary-300"
        >
          Send message
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
