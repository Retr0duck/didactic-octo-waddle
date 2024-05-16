import photo from '../Components/OIP.jpg';
function AboutPage(){
    return(
        <div>
            <section id="about" className="bg-gray-100 py-16">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">Acerca de Nosotros</h2>
        <div className="flex flex-col md:flex-row justify-center items-center">
          <div className="w-full md:w-1/2 md:mr-8 mb-4 md:mb-0">
            <img src={photo} alt="Imagen de la empresa" className="w-full h-auto rounded-lg" />
          </div>
          <div className="w-full md:w-1/2">
            <p className="text-lg leading-relaxed">
            Aurora Tech es una empresa líder en tecnología con sede en Silicon Valley. Fundada en 2015, nos especializamos en desarrollo de software, inteligencia artificial y realidad virtual. Nuestro enfoque en la innovación constante y la excelencia técnica nos ha convertido en referentes en el sector. Además, nos comprometemos con la responsabilidad social corporativa y la mejora del mundo. Únete a nosotros en nuestro viaje hacia la innovación tecnológica.
            </p>
            <p className="text-lg leading-relaxed mt-4">
            ¡Únete a nosotros en nuestro viaje hacia la innovación y la excelencia tecnológica!
            </p>
          </div>
        </div>
      </div>
    </section>
        </div>
    )
}
export default AboutPage;