// import { Button } from "@/components/ui/button"
// import { input } from "@/components/ui/input"
// import { textarea } from "@/components/ui/textarea"
// import { label } from "@/components/ui/label"
// import { Phone, Mail, MapPin } from "lucide-react"
import { Phone, Envelope, SearchLocation } from "../icons/icons";

export default function Component() {
  return (
    <main className="flex flex-grow justify-center bg-black px-4 py-12 sm:px-6 lg:px-8">
      <div className="w-full max-w-2xl space-y-12">
        <div className="text-center">
          <h2 className="mt-6 text-3xl font-extrabold text-gray-200">
            Contact Us
          </h2>
          <p className="mt-2 text-pretty text-lg text-gray-300 lg:text-xl xl:text-2xl">
            We'd love to hear from you. Please fill out this form or use our
            contact information below.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 text-gray-300 md:grid-cols-2">
          <form className="space-y-6 [&>div]:flex [&>div]:flex-col [&_input]:text-black [&_textarea]:text-black">
            <div>
              <label htmlFor="name">Name</label>
              <input
                id="name"
                name="name"
                type="text"
                required
                className="mt-1 rounded-md"
              />
            </div>
            <div>
              <label htmlFor="email">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="mt-1 rounded-md"
              />
            </div>
            <div>
              <label htmlFor="subject">Subject</label>
              <input
                id="subject"
                name="subject"
                type="text"
                required
                className="mt-1 rounded-md"
              />
            </div>
            <div>
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows={4}
                required
                className="mt-1 rounded-md"
              />
            </div>
            <div>
              <button
                type="submit"
                className="w-full rounded-md bg-gray-100 px-4 py-2 text-black hover:bg-gray-300"
              >
                Send Message
              </button>
            </div>
          </form>

          <div className="space-y-8">
            <div>
              <h3 className="text-lg font-semibold text-gray-200 xl:text-xl">
                Contact Information
              </h3>
              <p className="mt-2 text-pretty text-base text-gray-300 xl:text-lg">
                Don't hesitate to reach out. We're here to help!
              </p>
            </div>
            <div className="space-y-6">
              <div className="flex items-center">
                <Phone className="mr-4 size-6 -scale-x-100" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center">
                <Envelope className="mr-4 size-6" />
                <span>contact@fitlifeexercises.com</span>
              </div>
              <div className="flex items-center">
                <SearchLocation className="mr-4 size-6" />
                <span>123 Fitness Street, Healthy City, HC 12345</span>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-200">
                Business Hours
              </h3>
              <p className="mt-2 text-base text-gray-300">
                Monday - Friday: 9am - 6pm
                <br />
                Saturday: 10am - 4pm
                <br />
                Sunday: Closed
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
