import React from 'react'
import './RecommendedVideos.css';
import VideoCard from './VideoCard';

function RecommendedVideos() {
  return (
    <div className="recommendedVideos">
      <h2>Recommended</h2>
      <div className="recommendedVideos__videos">
      <VideoCard
      title="Become a software Developer in 30 days | 2023/2024" 
      views="2.5M Views"
      timestamp="1 week ago"
      channelImage="https://pbs.twimg.com/profile_images/1686815722641440777/sBAv4xfC_400x400.jpg"
      channel="El Magnifico"
      image="https://thumbor.forbes.com/thumbor/fit-in/1290x/https://www.forbes.com/advisor/wp-content/uploads/2022/06/software_engineer.jpeg.jpg"
      />
      <VideoCard 
      title="How to become a world class chef | 2023/2024" 
      views="1.5M Views"
      timestamp="6 weeks ago"
      channelImage="https://scontent.flos3-2.fna.fbcdn.net/v/t39.30808-6/347087223_572230298115520_7663667087596643739_n.jpg?stp=dst-jpg_p206x206&_nc_cat=109&cb=99be929b-3346023f&ccb=1-7&_nc_sid=c21ed2&_nc_eui2=AeEasuByYeT47NWz2_CSpHa0euAgRW33SnZ64CBFbfdKdgIinn1F7FgLu9CIgrs4Z0eeEdkVc3GMxrfrXGNBw1i4&_nc_ohc=kM_4EEy1zrEAX9nEmGf&_nc_ht=scontent.flos3-2.fna&oh=00_AfAygM7SaMWaJAFEteX6qBlNzFI1esvboGvpkcIMDXHtUQ&oe=64DAC0AA"
      channel="Hilda Baci"
      image="https://media.istockphoto.com/id/1162911786/photo/the-team-of-cooks-backs-in-the-work-in-the-modern-kitchen-the-workflow-of-the-restaurant-in.jpg?s=612x612&w=0&k=20&c=Nn1xO1gbUGnEzTHp4Sitg_ouob_co3jY5hDv_kHWzxE="
      />
      <VideoCard  
      title=" Introduction to Golang | 2023/2024" 
      views="10M Views"
      timestamp="3 days ago"
      channelImage="https://scontent.flos3-2.fna.fbcdn.net/v/t1.6435-9/76778240_2454423298214895_3415669374613192704_n.jpg?_nc_cat=104&cb=99be929b-3346023f&ccb=1-7&_nc_sid=be3454&_nc_eui2=AeEq6lD-bp-x5fwb5VWNi0WKOpxp-eJpBe06nGn54mkF7XqT8tC9ZDiHnFQA8wq1sKplXPvWt2BInBKkpS_-pWCt&_nc_ohc=4Xk1F-oViTAAX_47LSV&_nc_ht=scontent.flos3-2.fna&oh=00_AfCzIIEGJjPwS5IbXjO7YcL2Q6N8ORgQRpffk_pVfzUfrw&oe=64FCA729"
      channel="Chisom Amadi"
      image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPEgbLsupTkD49G6ixyGtiYMxhitdtHSVsIG_wAM9NnA&s"
      />
      <VideoCard 
      title=" SpaceX-revolutionalizing technology | 2023/2024" 
      views="200M Views"
      timestamp="2 months ago"
      channelImage="data:image/jpeg;base64,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"
      channel="Elon Musk"
      image="https://images.unsplash.com/photo-1541185933-ef5d8ed016c2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c3BhY2V4fGVufDB8fDB8fHww&w=1000&q=80"
     />
      <VideoCard 
      title=" Gold blooded | 2023/2024" 
      views="150M Views"
      timestamp="3 Months ago"
      channelImage="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbf_pEpE9c0SdqKQQ77w3go8WtBz-OYS-vUkn5aE92&s"
      channel="Steph Curry"
      image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6y1_n0IqgU8t8-BLqI47GZm-e-7G_3Ks79NHLNTA&s"
      />
      <VideoCard 
      title=" How to be wicked | 2023/2024" 
      views="100 Views"
      timestamp="10 Months ago"
      channelImage="https://scontent.flos3-2.fna.fbcdn.net/v/t1.6435-9/104827213_2742803495950535_4764609545060136786_n.jpg?_nc_cat=111&cb=99be929b-3346023f&ccb=1-7&_nc_sid=dd63ad&_nc_eui2=AeFmjO433XTyIwS3l-Kr9QknsS4kLVdirQSxLiQtV2KtBLlurn_9gYSZQZhCbHkGAxivLHkZ4_hPLtFfCUzU7alI&_nc_ohc=rv94Vy90YIAAX9dEclN&_nc_ht=scontent.flos3-2.fna&oh=00_AfCrwnckDAiIjmYJ3eOMrp-TxjjUr54KDMjptIQgZTlz3Q&oe=64FCBF88"
      channel="Ajuremisan Ogbe"
      image="https://media.istockphoto.com/id/588968400/vector/witch-silhouette.jpg?s=612x612&w=0&k=20&c=KTL5KywiiDb9Q13H_wl5p87xYB_4X1Pvuet3PPA7uss="
      />
      <VideoCard 
      title=" Top 10 Fastest cars in 2023 | 2023/2024" 
      views="7.6M Views"
      timestamp="8 months ago"
      channelImage="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcS3bDP-AbnH7l2pjO-SwJkEFQu9dxDE6V8wyJ_5x_lfkVpTMA80"
      channel="Hoops Nation"
      image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpA1AYlviFcDF3V3nBk03N3fhWcNi7X8LH_jASY9jq&s"
      />
      <VideoCard 
      title=" Superman and Lois | 2023/2024" 
      views="7.6M Views"
      timestamp="3 Years ago"
      channelImage="https://assets.www.warnerbros.com/drupal-root/public/2019_wb_pictures.png"
      channel="Warner Brothers"
      image="https://media.comicbook.com/2021/03/superman-and-lois-poster-1259202.jpeg?auto=webp&width=533&height=800&crop=533:800,smart"
      />
      <VideoCard
      title="Become a software Developer in 30 days | 2023/2024" 
      views="2.5M Views"
      timestamp="1 week ago"
      channelImage="https://pbs.twimg.com/profile_images/1686815722641440777/sBAv4xfC_400x400.jpg"
      channel="El Magnifico"
      image="https://thumbor.forbes.com/thumbor/fit-in/1290x/https://www.forbes.com/advisor/wp-content/uploads/2022/06/software_engineer.jpeg.jpg"
      />
      <VideoCard 
      title="How to become a world class chef | 2023/2024" 
      views="1.5M Views"
      timestamp="6 weeks ago"
      channelImage="https://scontent.flos3-2.fna.fbcdn.net/v/t39.30808-6/347087223_572230298115520_7663667087596643739_n.jpg?stp=dst-jpg_p206x206&_nc_cat=109&cb=99be929b-3346023f&ccb=1-7&_nc_sid=c21ed2&_nc_eui2=AeEasuByYeT47NWz2_CSpHa0euAgRW33SnZ64CBFbfdKdgIinn1F7FgLu9CIgrs4Z0eeEdkVc3GMxrfrXGNBw1i4&_nc_ohc=kM_4EEy1zrEAX9nEmGf&_nc_ht=scontent.flos3-2.fna&oh=00_AfAygM7SaMWaJAFEteX6qBlNzFI1esvboGvpkcIMDXHtUQ&oe=64DAC0AA"
      channel="Hilda Baci"
      image="https://media.istockphoto.com/id/1162911786/photo/the-team-of-cooks-backs-in-the-work-in-the-modern-kitchen-the-workflow-of-the-restaurant-in.jpg?s=612x612&w=0&k=20&c=Nn1xO1gbUGnEzTHp4Sitg_ouob_co3jY5hDv_kHWzxE="
      />
      <VideoCard  
      title=" Introduction to Golang | 2023/2024" 
      views="10M Views"
      timestamp="3 days ago"
      channelImage="https://scontent.flos3-2.fna.fbcdn.net/v/t1.6435-9/76778240_2454423298214895_3415669374613192704_n.jpg?_nc_cat=104&cb=99be929b-3346023f&ccb=1-7&_nc_sid=be3454&_nc_eui2=AeEq6lD-bp-x5fwb5VWNi0WKOpxp-eJpBe06nGn54mkF7XqT8tC9ZDiHnFQA8wq1sKplXPvWt2BInBKkpS_-pWCt&_nc_ohc=4Xk1F-oViTAAX_47LSV&_nc_ht=scontent.flos3-2.fna&oh=00_AfCzIIEGJjPwS5IbXjO7YcL2Q6N8ORgQRpffk_pVfzUfrw&oe=64FCA729"
      channel="Chisom Amadi"
      image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPEgbLsupTkD49G6ixyGtiYMxhitdtHSVsIG_wAM9NnA&s"
      />
      <VideoCard 
      title=" SpaceX-revolutionalizing technology | 2023/2024" 
      views="200M Views"
      timestamp="2 months ago"
      channelImage="data:image/jpeg;base64,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"
      channel="Elon Musk"
      image="https://images.unsplash.com/photo-1541185933-ef5d8ed016c2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c3BhY2V4fGVufDB8fDB8fHww&w=1000&q=80"
     />
      <VideoCard 
      title=" Gold blooded | 2023/2024" 
      views="150M Views"
      timestamp="3 Months ago"
      channelImage="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbf_pEpE9c0SdqKQQ77w3go8WtBz-OYS-vUkn5aE92&s"
      channel="Steph Curry"
      image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6y1_n0IqgU8t8-BLqI47GZm-e-7G_3Ks79NHLNTA&s"
      />
      <VideoCard 
      title=" How to be wicked | 2023/2024" 
      views="100 Views"
      timestamp="10 Months ago"
      channelImage="https://scontent.flos3-2.fna.fbcdn.net/v/t1.6435-9/104827213_2742803495950535_4764609545060136786_n.jpg?_nc_cat=111&cb=99be929b-3346023f&ccb=1-7&_nc_sid=dd63ad&_nc_eui2=AeFmjO433XTyIwS3l-Kr9QknsS4kLVdirQSxLiQtV2KtBLlurn_9gYSZQZhCbHkGAxivLHkZ4_hPLtFfCUzU7alI&_nc_ohc=rv94Vy90YIAAX9dEclN&_nc_ht=scontent.flos3-2.fna&oh=00_AfCrwnckDAiIjmYJ3eOMrp-TxjjUr54KDMjptIQgZTlz3Q&oe=64FCBF88"
      channel="Ajuremisan Ogbe"
      image="https://media.istockphoto.com/id/588968400/vector/witch-silhouette.jpg?s=612x612&w=0&k=20&c=KTL5KywiiDb9Q13H_wl5p87xYB_4X1Pvuet3PPA7uss="
      />
      <VideoCard 
      title=" Top 10 Fastest cars in 2023 | 2023/2024" 
      views="7.6M Views"
      timestamp="8 months ago"
      channelImage="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcS3bDP-AbnH7l2pjO-SwJkEFQu9dxDE6V8wyJ_5x_lfkVpTMA80"
      channel="Hoops Nation"
      image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpA1AYlviFcDF3V3nBk03N3fhWcNi7X8LH_jASY9jq&s"
      />
      <VideoCard 
      title=" Superman and Lois | 2023/2024" 
      views="7.6M Views"
      timestamp="3 Years ago"
      channelImage="https://assets.www.warnerbros.com/drupal-root/public/2019_wb_pictures.png"
      channel="Warner Brothers"
      image="https://media.comicbook.com/2021/03/superman-and-lois-poster-1259202.jpeg?auto=webp&width=533&height=800&crop=533:800,smart"
      />
      
     
      </div>
    </div>
  )
}

export default RecommendedVideos