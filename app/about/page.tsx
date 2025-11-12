import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <section className="min-h-screen flex flex-col items-center justify-center bg-gray-50 pt-24 pb-12">
        <div className="max-w-2xl mx-auto p-8 bg-white rounded-2xl shadow-lg">
          <h1 className="text-4xl font-bold text-accent mb-4">About Wise Nepal Travel</h1>
          <p className="text-lg text-gray-700 mb-6">
            Wise Nepal Travel is your trusted partner for affordable flights and travel experiences in Nepal. We are dedicated to making your journey seamless, safe, and memorable. Our team provides expert assistance, competitive prices, and reliable service for all travelers.
          </p>
          <ul className="list-disc pl-6 text-gray-700 mb-6">
            <li>Licensed and trusted travel agency</li>
            <li>24/7 customer support</li>
            <li>Expert guidance for your trip</li>
            <li>Custom packages and group travel options</li>
          </ul>
          <p className="text-gray-600">Contact us for more information or to start planning your perfect trip to Nepal!</p>
        </div>
      </section>
      <Footer />
    </>
  );
}
