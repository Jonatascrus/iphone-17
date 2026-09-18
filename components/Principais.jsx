import iphoneTitanium from '../src/assets/titanium-design.jpg';
import iosFuturista from '../src/assets/ios-features.jpg';
import A18 from '../src/assets/chip-a18-pro.jpg';

function Principais() {

    return (
        <section className="bg-black py-20 px-6 scroll-section" id="design">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-5xl font-bold mb-4">Desgin revolucionário</h2>
                    <p className="text-xl text-gray-400">Cada detalhe foi pensado para criar a melhor experiência</p>
                </div>

                <div className="space-y-32 mb-24">
                    <div className="flex flex-col md:flex-row items-center gap-12 animate-zoom-in">
                        <div className="w-full md:w-1/2">
                            <img className="w-full animate-zoom-in" src={iphoneTitanium} alt="iPhone com acabamento em titânio" />
                        </div>

                        <div className="w-full md:w-1/2">
                            <span className="text-7xl font-bold text-blue-600/80">01</span>
                            <h3 className="font-bold mt-4 mb-3 text-4xl">Titânio Premium</h3>
                            <p className="text-gray-400 text-lg leading-relaxed">Estrutura leve e resistente, com acabamento sofisticado e detalhes pensados para transmitir qualidade em cada toque.</p>
                        </div>
                    </div>

                    <div className="flex flex-col md:flex-row-reverse items-center gap-12 animate-zoom-in">
                        <div className="w-full md:w-1/2">
                            <img className="w-full animate-zoom-in" src={iosFuturista} alt="Recursos do iOS 26" />
                        </div>

                        <div className="w-full md:w-1/2">
                            <span className="text-7xl font-bold text-orange-500/80">02</span>
                            <h3 className="font-bold mt-4 mb-3 text-4xl">iOS 26</h3>
                            <p className="text-gray-400 text-lg leading-relaxed">Uma experiência mais intuitiva, com recursos inteligentes que ajudam você a organizar, criar e aproveitar melhor cada momento.</p>
                        </div>
                    </div>

                    <div className="flex flex-col md:flex-row items-center gap-12 animate-zoom-in">
                        <div className="w-full md:w-1/2">
                            <img className="w-full animate-zoom-in" src={A18} alt="Chip A18 Pro" />
                        </div>

                        <div className="w-full md:w-1/2">
                            <span className="text-7xl font-bold text-blue-600/80">03</span>
                            <h3 className="font-bold mt-4 mb-3 text-4xl">A18 Pro</h3>
                            <p className="text-gray-400 text-lg leading-relaxed mb-6">Potência para criar, jogar e editar com velocidade profissional, sem comprometer a fluidez.</p>

                            <ul className="space-y-3 text-gray-400">
                                <li>CPU até 20% mais rápida</li>
                                <li>GPU até 25% mais eficiente</li>
                                <li>Neural Engine com 16 núcleos</li>
                                <li>Ray tracing acelerado por hardware</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div id="camera" className="text-center">
                    <h3 className="text-4xl font-bold mb-10">Sistema de câmera Pro avançado</h3>

                    <div className="grid grid-cols-3 gap-6">
                        <div className=" bg-gray-900 rounded-2xl p-8 hover:scale-105 transition-all duration-300 cursor-pointer">
                            <div className="text-4xl font-bold text-blue-600 mb-4">48MP</div>
                            <h4 className="text-xl font-semibold mb-2">Principal</h4>
                            <p className="text-gray-400">Sensor quad-pixel com foco automático</p>
                        </div>

                        <div className=" bg-gray-900 rounded-2xl p-8 hover:scale-105 transition-all duration-300  cursor-pointer">
                            <div className="text-4xl font-bold text-orange-500 mb-4">12MP</div>
                            <h4 className="text-xl font-semibold mb-2">Ultra Wide</h4>
                            <p className="text-gray-400">Campo de visão de 120° com modo noturno</p>
                        </div>

                        <div className=" bg-gray-900 rounded-2xl p-8 hover:scale-105 transition-all duration-300 cursor-pointer">
                            <div className="text-4xl font-bold text-blue-600 mb-4">48MP</div>
                            <h4 className="text-xl font-semibold mb-2">Telefoto 5x</h4>
                            <p className="text-gray-400">Zoom óptico de 5x com estabilização</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Principais;