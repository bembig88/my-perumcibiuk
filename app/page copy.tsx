"use client";

import {
  Megaphone,
  CheckCircle2,
  Clock3,
  Phone,
  ArrowRight,
} from "lucide-react";

export default function LandingSubsidiPage() {
  return (
    <main className="min-h-screen bg-gray-100">

      {/* ================= HERO ================= */}
      <section className="bg-gradient-to-r from-red-600 to-orange-500 text-white">

        <div className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-10 items-center">

          {/* LEFT */}
          <div>

            <div className="inline-flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full mb-6">
              <Megaphone size={18} />
              <span className="text-sm">
                Informasi Perubahan Subsidi
              </span>
            </div>

            <h1 className="text-5xl font-bold leading-tight mb-6">
              Program Subsidi Baru
              <br />
              Tahun 2026
            </h1>

            <p className="text-lg text-white/90 mb-8 leading-relaxed">
              Pemerintah melakukan penyesuaian skema subsidi
              untuk meningkatkan pemerataan bantuan dan
              efisiensi penyaluran kepada masyarakat.
            </p>

            <div className="flex gap-4">

              <button
                className="
                  bg-white
                  text-red-600
                  px-6
                  py-3
                  rounded-xl
                  font-semibold
                  hover:bg-gray-100
                  transition
                "
              >
                Pelajari Detail
              </button>

              <button
                className="
                  border
                  border-white
                  px-6
                  py-3
                  rounded-xl
                  font-semibold
                  hover:bg-white/10
                  transition
                "
              >
                Hubungi Kami
              </button>

            </div>

          </div>

          {/* RIGHT */}
          <div className="bg-white/10 backdrop-blur p-8 rounded-3xl shadow-2xl">

            <h2 className="text-2xl font-bold mb-6">
              Perubahan Utama
            </h2>

            <div className="space-y-5">

              <div className="flex gap-4">
                <CheckCircle2 className="text-green-300" />
                <div>
                  <h3 className="font-semibold">
                    Verifikasi Digital
                  </h3>
                  <p className="text-white/80 text-sm">
                    Seluruh data penerima subsidi
                    dilakukan validasi secara online.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <CheckCircle2 className="text-green-300" />
                <div>
                  <h3 className="font-semibold">
                    Penyaluran Tepat Sasaran
                  </h3>
                  <p className="text-white/80 text-sm">
                    Bantuan diberikan berdasarkan
                    kategori dan kebutuhan masyarakat.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <CheckCircle2 className="text-green-300" />
                <div>
                  <h3 className="font-semibold">
                    Monitoring Real-Time
                  </h3>
                  <p className="text-white/80 text-sm">
                    Status subsidi dapat dipantau
                    langsung melalui sistem online.
                  </p>
                </div>
              </div>

            </div>

          </div>

        </div>

      </section>

      {/* ================= INFO ================= */}
      <section className="max-w-7xl mx-auto px-6 py-16">

        <div className="grid md:grid-cols-3 gap-6">

          <div className="bg-white p-8 rounded-2xl shadow">

            <div className="bg-red-100 w-14 h-14 rounded-xl flex items-center justify-center mb-5">
              <Clock3 className="text-red-600" />
            </div>

            <h3 className="text-xl font-bold mb-3">
              Jadwal Berlaku
            </h3>

            <p className="text-gray-600">
              Program subsidi baru mulai berlaku
              pada Januari 2026 secara bertahap.
            </p>

          </div>

          <div className="bg-white p-8 rounded-2xl shadow">

            <div className="bg-orange-100 w-14 h-14 rounded-xl flex items-center justify-center mb-5">
              <CheckCircle2 className="text-orange-500" />
            </div>

            <h3 className="text-xl font-bold mb-3">
              Data Terintegrasi
            </h3>

            <p className="text-gray-600">
              Seluruh data penerima disinkronkan
              dengan sistem nasional.
            </p>

          </div>

          <div className="bg-white p-8 rounded-2xl shadow">

            <div className="bg-blue-100 w-14 h-14 rounded-xl flex items-center justify-center mb-5">
              <Phone className="text-blue-600" />
            </div>

            <h3 className="text-xl font-bold mb-3">
              Layanan Bantuan
            </h3>

            <p className="text-gray-600">
              Tersedia pusat bantuan dan pengaduan
              untuk masyarakat.
            </p>

          </div>

        </div>

      </section>

      {/* ================= CTA ================= */}
      <section className="bg-white py-20">

        <div className="max-w-4xl mx-auto text-center px-6">

          <h2 className="text-4xl font-bold mb-6">
            Pastikan Data Anda Sudah Terdaftar
          </h2>

          <p className="text-gray-600 text-lg mb-8">
            Cek status penerima subsidi dan lakukan
            pembaruan data untuk memastikan bantuan
            dapat diterima dengan lancar.
          </p>

          <button
            className="
              bg-red-600
              hover:bg-red-700
              text-white
              px-8
              py-4
              rounded-2xl
              text-lg
              font-semibold
              inline-flex
              items-center
              gap-2
              transition
            "
          >
            Cek Status Subsidi
            <ArrowRight size={20} />
          </button>

        </div>

      </section>

      {/* ================= FOOTER ================= */}
      <footer className="bg-gray-900 text-gray-300 py-8">

        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between gap-4">

          <div>
            <h3 className="text-white font-bold text-lg">
              Subsidi Nasional
            </h3>

            <p className="text-sm mt-2">
              Sistem Informasi Perubahan Subsidi 2026
            </p>
          </div>

          <div className="text-sm">
            © 2026 Pemerintah Republik Indonesia
          </div>

        </div>

      </footer>

    </main>
  );
}