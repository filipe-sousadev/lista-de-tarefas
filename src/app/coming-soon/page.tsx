import Link from "next/link";

export default function ComingSoon() {
  return (
    <main className="min-h-screen w-full flex flex-col items-center justify-start px-6 py-16 bg-[#f4f4f6]">
      <h1 className="text-4xl font-bold text-neutral-900 mb-12 text-center">
        Primeiro push do Projeto - Feito por Filipe DEV
      </h1>

      {/* GRID DE CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl mb-14">
        {/* CARD 1 */}
        <div className="bg-white rounded-3xl p-8 shadow-sm border border-neutral-200">
          <h2 className="text-2xl font-semibold mb-3">
            First Push — Stack do Projeto
          </h2>
          <p className="text-neutral-700 leading-relaxed">
            Projeto inicial desenvolvido com uma stack moderna:
            <strong>
              {" "}
              TypeScript, React, Next.js, TailwindCSS, API REST com Fastify,
              Prisma ORM e PostgreSQL.
            </strong>{" "}
            Primeiro passo para construção de algo grande.
          </p>
        </div>

        {/* CARD 2 */}
        <div className="bg-white rounded-3xl p-8 shadow-sm border border-neutral-200">
          <h2 className="text-2xl font-semibold mb-3">
            Performance e Agilidade
          </h2>
          <p className="text-neutral-700 leading-relaxed">
            Foco total em performance com <strong>SSR/SSG</strong>, uso do
            <strong> React Compiler</strong>, arquitetura otimizada e fluxo de
            desenvolvimento acelerado com Hot Reloading. Cada detalhe
            configurado para máxima produtividade.
          </p>
        </div>

        {/* CARD 3 */}
        <div className="bg-white rounded-3xl p-8 shadow-sm border border-neutral-200">
          <h2 className="text-2xl font-semibold mb-3">
            Responsividade & Construção Técnica
          </h2>
          <p className="text-neutral-700 leading-relaxed">
            Design responsivo mobile-first, componentes acessíveis, padronização
            com <strong>ESLint, Prettier e EditorConfig</strong> e estrutura
            pensada para escalabilidade. Um projeto sólido desde o primeiro
            commit.
          </p>
        </div>
      </div>

      {/* BOTÃO PARA VOLTAR À PÁGINA PRINCIPAL */}
      <Link href="/">
        <button className="px-8 py-3 bg-neutral-900 text-white rounded-2xl text-lg font-medium shadow-md hover:bg-neutral-800 transition-all">
          Acessar Projeto
        </button>
      </Link>
    </main>
  );
}
