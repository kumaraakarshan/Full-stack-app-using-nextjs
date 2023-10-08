import { useRouter } from "next/router";








// our-domain.com/news/1




function SomeThingPage() {
  const router = useRouter();
  router.query.newsId;
    return <h1>The something Page</h1>
  }
  
  export default SomeThingPage;