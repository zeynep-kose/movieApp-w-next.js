import React from "react";
import Link from "next/link";
import Movies from '@/app/mocks/movies.json';
import  FeaturedMovie  from "@/app/components/featureofMovie";
// container kullanmamızın sebebi sayfa içerisinde bulunan UI componentlerini olabildiğince container içine logic bazlı durumları sadece page içinde göstermemiz gerekiyor.(bir router akışı yada backende bağlanma gibi)
function HomeContainer () {
    return 
    <FeaturedMovie movie={Movies.result[0]} />
}
export default HomeContainer;