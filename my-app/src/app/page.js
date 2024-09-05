import Image from "next/image";
import "../app/styles/reset.css"
import "@/app/styles/global.css"
import HomeContainer from "./containers/home";
//Route kavramı bir web sitesinde kullanılan sayfalar, statik dinamik olarak ikiye ayrılır. Statiklerde route lar url in değişmediği sabit kaldığı.Dinamikler urlin parametreye değişkene bağlandığı route türüdür.
//Dynamic route: Dinamik route larda o route un adının ne olacağı belli değil bir değişkene bağladığımız iiçn o değişkne ismini klasör ismi yapıyoruz. bunun içinde [paramaetreismi]
//catch all routes çoklu parametre kullanmak isteniyorsa /../.. gibi not /.. o zman köseli parantez içindeki değişken isminimn önüne ... konacak [...parametre ismi]
//optional catch all routes  mesela ..docs/random-1/random-2 gidiyor ama direk ..doc dediğinde sayfa bulunamadı hatası almamak için iki tane köşeli parantez kullanmalısın[[...parametreismi]]
//optional cartch all routes : opsiyonel olarak sen parameterekabul et yada etme etmediğinde en tepedeki route u göster demek oluyor
//Route grouping: kullnıcı tarafında etkisi yok route lar çoğaldığında gruplama sağlar klasör ismine  app altına folder olarak (admin) böyle kullanılabilir  .() kullanılır url e yansıyan birşey yok sadece gruplandırma sağlıyor.Route ları organize edebilmek için yapılmış bir sey.
export default function Home() {
  return <><HomeContainer/></>;
}
