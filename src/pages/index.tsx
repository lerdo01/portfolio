export default function HomePage() {
    return (

        <section className="py-60 w-full h-full flex justify-center items-center">

            <div className="flex flex-col leading-[0.95]">
                <p className="text-[42px] font-bold">Hi, I&apos;am Lerdo!
                </p>
                <p className="leading-[1] max-w-[36ch] text-justify font-[500] text-[18px]">Um desenvolvedor Web FullStack que busca aprimorar e compartilhar conhecimentos. No contexto atual, estou aprimorando meus conhecimentos em projetos pessoais e trabalhos em comunidades!</p>
                <span className="py-2 flex flex-wrap w-[110px]">
                    <i className="text-[32px] devicon-javascript-plain colored"></i>
                    <i className="text-[32px] devicon-typescript-plain colored"></i>
                    <i className="text-[32px] devicon-react-original colored"></i>
                    <i className="text-[32px] devicon-flutter-plain colored"></i>
                    <i className="text-[32px] devicon-html5-plain colored"></i>
                    <i className="text-[32px] devicon-css3-plain colored"></i>
                </span>
            </div>

        </section>

    )
}