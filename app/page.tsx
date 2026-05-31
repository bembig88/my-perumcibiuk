"use client";

import Image from "next/image";
import {
  Megaphone,
  CheckCircle2,
  Clock3,
  Phone,
  ArrowRight,
} from "lucide-react";

export default function LandingPagePerumahan() {
  return (
    <main className="min-h-screen bg-white text-gray-800">
      {/* HERO SECTION */}
      <section className="relative bg-gradient-to-br from-green-700 to-green-500 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 py-24 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-block bg-white/20 px-4 py-2 rounded-full text-sm mb-5">
              Perumahan Subsidi
            </span>

            <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
              CIBIUK RESIDENCE Nyaman
              <span className="block text-yellow-300">
                Harga Terjangkau
              </span>
            </h1>

            <p className="mt-6 text-lg text-green-50 leading-relaxed max-w-xl">
              Miliki rumah impian dengan cicilan ringan, lokasi strategis,
              dan proses KPR mudah. Cocok untuk keluarga muda dan pekerja.
            </p>

            <div className="flex flex-wrap gap-4 mt-8">
              <a
                href="https://wa.me/6282115489857"
                target="_blank"
                className="bg-yellow-400 hover:bg-yellow-300 text-black font-semibold px-6 py-4 rounded-2xl shadow-lg transition"
              >
                Chat WhatsApp
              </a>

              <a
                href="#unit"
                className="border border-white hover:bg-white hover:text-green-700 px-6 py-4 rounded-2xl transition"
              >
                Lihat Unit
              </a>
            </div>

            <div className="grid grid-cols-3 gap-6 mt-12">
              <div>
                <h3 className="text-3xl font-bold">250+</h3>
                <p className="text-sm text-green-100 mt-1">Total Unit</p>
              </div>
              <div>
                <h3 className="text-3xl font-bold">21+</h3>
                <p className="text-sm text-green-100 mt-1">Unit Terjual</p>
              </div>

              <div>
                <h3 className="text-3xl font-bold">5 Menit</h3>
                <p className="text-sm text-green-100 mt-1">Ke Jalan Raya</p>
              </div>

              <div>
                <h3 className="text-3xl font-bold">Rp 900 Rb</h3>
                <p className="text-sm text-green-100 mt-1">Mulai Cicilan</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <img
              // src="https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=1200&auto=format&fit=crop"
              src="/images/Rumahsatu.jpeg?q=80&w=1200&auto=format&fit=crop"
              alt="Perumahan Subsidi"
              className="rounded-3xl shadow-2xl object-cover h-[500px] w-full"
            />

            <div className="absolute -bottom-6 -left-6 bg-white text-gray-800 p-5 rounded-2xl shadow-xl w-64">
              <h4 className="font-bold text-lg">Booking Sekarang</h4>
              <p className="text-sm text-gray-500 mt-2">
                Dapatkan promo DP ringan & bonus biaya akad.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* KEUNGGULAN */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold">
            Kenapa Memilih Perumahan Kami?
          </h2>

          <p className="mt-5 text-gray-600 text-lg">
            Hunian nyaman dengan lokasi strategis dan harga terjangkau.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-14">
          {[
            {
              title: 'Lokasi Strategis',
              desc: 'Dekat sekolah, pasar, dan fasilitas umum.',
            },
            {
              title: 'Cicilan Ringan',
              desc: 'Mulai dari 900 Ribuan per bulan.',
            },
            {
              title: 'Legalitas Aman',
              desc: 'SHM dan proses KPR terpercaya.',
            },
            {
              title: 'Lingkungan Nyaman',
              desc: 'Keamanan 24 jam dan jalan lebar.',
            },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white border border-gray-100 p-8 rounded-3xl shadow-sm hover:shadow-xl transition"
            >
              <div className="w-14 h-14 rounded-2xl bg-green-100 flex items-center justify-center text-2xl">
                ✅
              </div>

              <h3 className="mt-5 text-xl font-bold">{item.title}</h3>

              <p className="mt-3 text-gray-600 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* UNIT */}
      <section id="unit" className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row justify-between lg:items-end gap-6">
            <div>
              <h2 className="text-4xl font-bold">
                Tipe Rumah Favorit
              </h2>

              <p className="mt-4 text-gray-600 text-lg max-w-2xl">
                Desain modern minimalis dengan tata ruang nyaman.
              </p>
            </div>

            <a
              href="https://wa.me/6282115489857"
              className="bg-green-600 hover:bg-green-700 text-white px-6 py-4 rounded-2xl transition"
            >
              Konsultasi Gratis
            </a>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mt-14">
            {[
              {
                type: 'Type 30/60',
                price: 'Mulai Rp166 Juta',
                img: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1200&auto=format&fit=crop',
              },
              {
                type: 'Type 36/72',
                price: 'Mulai Rp185 Juta',
                img: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop',
              },
              {
                type: 'Type 45/84',
                price: 'Mulai Rp230 Juta',
                img: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?q=80&w=1200&auto=format&fit=crop',
              },
            ].map((house, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition"
              >
                <img
                  src={house.img}
                  alt={house.type}
                  className="h-64 w-full object-cover"
                />

                <div className="p-8">
                  <h3 className="text-2xl font-bold">{house.type}</h3>

                  <p className="text-green-600 font-semibold mt-3 text-lg">
                    {house.price}
                  </p>

                  <ul className="mt-5 space-y-2 text-gray-600">
                    <li>✔️ 2 Kamar Tidur</li>
                    <li>✔️ 1 Kamar Mandi</li>
                    <li>✔️ Ruang Tamu</li>
                    <li>✔️ Carport</li>
                  </ul>

                  <a
                    href="https://wa.me/6282115489857"
                    className="block text-center mt-7 bg-green-600 hover:bg-green-700 text-white py-4 rounded-2xl transition"
                  >
                    Booking Sekarang
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONI */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold">
            Testimoni Pembeli
          </h2>

          <p className="mt-5 text-gray-600 text-lg">
            Kepuasan konsumen menjadi prioritas kami.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mt-14">
          {[
            {
              name: 'Andi Saputra',
              text: 'Proses KPR cepat dan rumahnya nyaman untuk keluarga.',
            },
            {
              name: 'Rina Marlina',
              text: 'Lokasinya strategis dan harga masih sangat terjangkau.',
            },
            {
              name: 'Budi Hermawan',
              text: 'Developer amanah dan progres pembangunan bagus.',
            },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white border border-gray-100 rounded-3xl p-8 shadow-sm"
            >
              <div className="text-yellow-400 text-2xl">★★★★★</div>

              <p className="mt-5 text-gray-600 leading-relaxed">
                “{item.text}”
              </p>

              <div className="mt-6 font-bold">{item.name}</div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-green-700 text-white py-20">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-5xl font-bold leading-tight">
            Siap Punya Rumah Sendiri?
          </h2>

          <p className="mt-6 text-xl text-green-100">
            Konsultasikan kebutuhan rumah Anda sekarang juga.
          </p>

          <div className="flex flex-wrap justify-center gap-5 mt-10">
            <a
              href="https://wa.me/6282115489857"
              target="_blank"
              className="bg-yellow-400 hover:bg-yellow-300 text-black font-bold px-8 py-5 rounded-2xl shadow-lg transition"
            >
              Chat WhatsApp
            </a>

            <a
              href="#"
              className="border border-white hover:bg-white hover:text-green-700 px-8 py-5 rounded-2xl transition"
            >
              Download Brosur
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-gray-900 text-gray-300 py-10">
        <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row justify-between gap-8">
          <div>
            <h3 className="text-2xl font-bold text-white">
              Subsidi Residence
            </h3>

            <p className="mt-4 max-w-md text-gray-400">
              Hunian nyaman untuk keluarga Indonesia dengan harga terjangkau.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-white">Kontak</h4>

            <ul className="mt-4 space-y-2 text-gray-400">
              <li>📍 Garut, Jawa Barat</li>
              <li>📞 0821-1548-9857</li>
              <li>✉️ infocibiukresidence@gmail.com</li>
            </ul>
          </div>
        </div>
      </footer>
    </main>
  )
}
