import './App.css'
import Hobi from './Hobiler'
import HakkımdaResim from './components/Hakkımda-resim'
import Footer from './components/Footer'

function App() {
  

  return (
    <>
      <h1 className="app-h1">Blog Sayfam</h1>
      <hr />
      <h3 className="app-h3">Ben Kimim?</h3>
      <p className="app-p">
        İsmim Yakup soyismim Mutlu. Yirmi yaşındayım, KTO Karatay Üniversitesi bilgisayar 
        programcılığı bölümmünde eğitim görmekteyim. <br />
        Şu anda üniversitemin ingilizce hazırlık bölümünde okumaktayım. <br />
        Bu programa başlamadan önce c# ile yazılıma başladım. Bir müddet kendi çapımda 
        oyun yaptım. Daha sonra yazılımdan uzaklaştım ve 3D modellemeye başladım. Blender 
        uygulaması ile çevre tasarımları yaptım. <br />
        Kitap okumayı severim ve genel olarak felsefi kitaplar okurum. <br />
        1 yıl kadar yakın ve uzak dövüş sporları ile ilgilendim.

      </p>
      <HakkımdaResim/>
      <br /><br /><br /><br />
      <Hobi/>

      <Footer/>
    </>
  )
}

export default App
