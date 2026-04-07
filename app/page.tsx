const navigation = [
  "Alojamento",
  "Quartos",
  "Experiências",
  "Galeria",
  "Contacto",
];

const bookingFields = [
  { label: "Check-in", value: "Selecionar data" },
  { label: "Check-out", value: "Selecionar data" },
  { label: "Hóspedes", value: "2 adultos" },
];

const benefits = [
  "Melhor preço garantido",
  "Reserva direta",
  "Cancelamento flexível",
  "Comunicação rápida",
];

const heroImage =
  "https://images.pexels.com/photos/5563466/pexels-photo-5563466.jpeg?cs=srgb&dl=pexels-jonathanborba-5563466.jpg&fm=jpg&w=2200";

function ChevronDown() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 20 20"
      className="h-4 w-4 text-[#80766c]"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.8"
    >
      <path d="m5 7.5 5 5 5-5" />
    </svg>
  );
}

export default function Page() {
  return (
    <main className="min-h-screen bg-[#f3eee7] text-[#2f2a25]">
      <section className="relative isolate overflow-hidden bg-[#d8ccb8]">
        <div
          className="absolute inset-0 bg-cover bg-no-repeat brightness-[0.78]"
          style={{
            backgroundImage: `linear-gradient(90deg, rgba(22, 19, 16, 0.7) 0%, rgba(22, 19, 16, 0.56) 22%, rgba(22, 19, 16, 0.28) 44%, rgba(22, 19, 16, 0.12) 66%, rgba(22, 19, 16, 0.04) 100%), linear-gradient(180deg, rgba(21, 18, 15, 0.14) 0%, rgba(21, 18, 15, 0.04) 28%, rgba(21, 18, 15, 0.28) 100%), url("${heroImage}")`,
            backgroundPosition: "center right",
          }}
        />
        <div className="absolute inset-x-0 top-0 h-36 bg-gradient-to-b from-[rgba(18,16,14,0.48)] via-[rgba(18,16,14,0.22)] to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-56 bg-gradient-to-t from-[rgba(32,27,22,0.4)] via-[rgba(32,27,22,0.12)] to-transparent" />

        <header className="absolute inset-x-0 top-0 z-20">
          <div className="mx-auto flex w-full max-w-[1440px] items-start justify-between gap-6 px-6 py-5 sm:px-8 lg:px-10">
            <a href="#" className="text-[#f7f2ea]">
              <span
                className="block text-[1.5rem] font-medium leading-none tracking-[0.08em] sm:text-[1.7rem]"
                style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}
              >
                Casa do Pinhal
              </span>
              <span className="mt-2 block text-[0.68rem] font-semibold uppercase tracking-[0.42em] text-[#f3ede3]/82">
                Comporta
              </span>
            </a>

            <div className="flex items-center gap-4 lg:gap-8">
              <nav className="hidden items-center gap-7 text-[0.84rem] font-medium tracking-[0.02em] text-[#f5efe5]/84 lg:flex">
                {navigation.map((item) => (
                  <a
                    key={item}
                    href="#"
                    className="transition hover:text-white"
                  >
                    {item}
                  </a>
                ))}
              </nav>

              <div className="hidden items-center gap-5 sm:flex">
                <button
                  type="button"
                  className="text-[0.76rem] font-semibold tracking-[0.18em] text-[#f3ede3]/82"
                >
                  PT
                </button>
                <button
                  type="button"
                  className="rounded-full border border-white/24 bg-[rgba(247,242,234,0.14)] px-5 py-2.5 text-sm font-semibold text-[#fffaf3] backdrop-blur-[2px] transition hover:bg-[rgba(247,242,234,0.22)]"
                >
                  Reservar
                </button>
              </div>
            </div>
          </div>
        </header>

        <div className="relative mx-auto flex min-h-screen w-full max-w-[1440px] flex-col px-6 pb-8 pt-28 sm:px-8 lg:min-h-[940px] lg:px-10 lg:pb-10 lg:pt-32">
          <div className="max-w-[520px] text-white">
            <p className="text-[0.75rem] font-semibold uppercase tracking-[0.34em] text-white/72">
              Alojamento local na Comporta
            </p>
            <h1 className="mt-5 max-w-[10.5ch] text-[2.85rem] font-semibold leading-[1.02] tracking-[-0.045em] text-white sm:text-[3.55rem] xl:text-[4.15rem]">
              Um refúgio calmo entre o pinhal e o Atlântico.
            </h1>
            <p className="mt-6 max-w-[29rem] text-[1rem] leading-8 text-white/84">
              Uma estadia pensada para abrandar, com conforto, luz natural e
              reserva direta a poucos minutos da praia.
            </p>

            <div className="mt-10 flex flex-wrap gap-3.5">
              <button
                type="button"
                className="rounded-full bg-[#f7f2ea] px-7 py-3.5 text-sm font-semibold text-[#302923] shadow-[0_14px_30px_rgba(23,19,15,0.14)] transition hover:bg-white"
              >
                Verificar disponibilidade
              </button>
              <button
                type="button"
                className="rounded-full border border-white/24 bg-[rgba(255,255,255,0.08)] px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-[rgba(255,255,255,0.14)]"
              >
                Ver o alojamento
              </button>
            </div>
          </div>

          <div className="relative mt-auto pt-24 lg:pt-28">
            <div className="mx-auto max-w-[1180px] overflow-hidden rounded-[28px] border border-[#e7ddd1] bg-[rgba(248,244,238,0.98)] shadow-[0_24px_56px_rgba(34,28,23,0.14)]">
              <div className="grid gap-2 px-4 py-4 lg:grid-cols-[1fr_1fr_1fr_230px] lg:items-center lg:gap-0 lg:px-6 lg:py-4">
                {bookingFields.map((field, index) => (
                  <div
                    key={field.label}
                    className={`rounded-[20px] border border-[#ece3d8] bg-white px-4 py-4 shadow-[0_8px_24px_rgba(51,42,34,0.05)] lg:rounded-none lg:border-0 lg:bg-transparent lg:px-5 lg:py-2 lg:shadow-none ${
                      index < bookingFields.length - 1
                        ? "lg:border-r lg:border-[#e7ddd2]"
                        : ""
                    }`}
                  >
                    <div className="text-[0.7rem] font-semibold uppercase tracking-[0.26em] text-[#948877]">
                      {field.label}
                    </div>
                    <button
                      type="button"
                      className="mt-3 flex w-full items-center justify-between text-left text-[0.98rem] font-medium text-[#322c25]"
                    >
                      <span>{field.value}</span>
                      <ChevronDown />
                    </button>
                  </div>
                ))}

                <div className="pt-1 lg:pl-5 lg:pt-0">
                  <button
                    type="button"
                    className="flex w-full items-center justify-center rounded-full bg-[#6d7965] px-6 py-4 text-sm font-semibold text-white shadow-[0_14px_28px_rgba(81,95,73,0.22)] transition hover:bg-[#626f5a]"
                  >
                    Verificar disponibilidade
                  </button>
                </div>
              </div>

              <div className="border-t border-[#ece3d8] bg-[#fbf8f3] px-5 py-3.5">
                <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2.5 text-[0.9rem] text-[#6b635a] lg:justify-between">
                  {benefits.map((item) => (
                    <div key={item} className="flex items-center gap-2.5">
                      <span className="h-2 w-2 rounded-full bg-[#8a9882]" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
