import Iphone from '../src/assets/iPhone-16-hero.png'

function Types() {


    return (
        <section className="bg-black py-24 px-6" id="iphone-pro">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-12">
                <div className="animate-fade-up">
                    <p className="text-blue-500 uppercase tracking-widest text-sm font-semibold mb-4">Conheça o novo</p>
                    <h2 className="text-5xl md:text-7xl font-bold mb-6">iPhone Pro</h2>
                    <p className="text-xl text-gray-300 leading-relaxed mb-8">Desempenho profissional em um desgnin sofistificado.
                        o iPhone Pro combina potência, câmera avançada e tecnologia para acomapanhar tudo o que você faz.
                    </p>
                    <div className="grid grid-cols-2 gap-6 text-gray-300 mb-8">
                        <div>
                            <strong className="block text-2xl text-white">6,3</strong>
                            <span className=" text-gray-300">Tela Super Retina XDR</span>
                        </div>
                        <div>
                            <strong className="block text-2xl text-white">A18 Pro</strong>
                            <span className=" text-gray-300">Chip de alto desempenho</span>
                        </div>
                        <div>
                            <strong className="block text-2xl text-white">48MP</strong>
                            <span className=" text-gray-300">Câmera principal</span>
                        </div>
                        <div>
                            <strong className="block text-2xl text-white">5x</strong>
                            <span className=" text-gray-300">Zoom óptico</span>
                        </div>
                    </div>

                    <button className="bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105">
                        Comprar iPhone Pro
                    </button>
                </div>

                <div className="flex justify-center md:justify-end animate-zoom-in">
                    <img src={Iphone} alt="Iphone-16" className="w-full max-w-md rounded-3xl object-cover drop-shadow-[0_30px_25px_rgba(0,0,0,0.8]" />
                </div>
            </div>
        </section>
    )
}

export default Types;