# Next.js Blog
[Next.js 공식홈페이지 블로그 튜토리얼](https://nextjs.org/learn) 을 보고 공부한 blog입니다.
</br> 
## 📝I Learned !

- **Next의 라우팅**   
 page내의 컴포넌트를 작성하면 next가 알아서 라우팅 처리해줌    
  </br> 
  
- **페이지 이동**    
  ``` <Link> ```사용
  </br> 
  
- **클라이언트 사이드 렌더링**   
 ``` <Link> ``` 를 이용한 페이지 이동은 서버사이드가 아닌 클라이언트 사이드의 이동을 가능하게 함   
 전체 페이지 로드하는 것 아니라 필요한 부분만 골라서 가져옴   
  </br> 
  
- **code spliting & prefetch**   
 개발자가 신경쓰지 않아도 자동으로 코드 스플리팅함.
   </br> 
  
- **전역 스타일링**   
 프로젝트 모든 페이지에 적용되어야할 스타일이 있으면 ```pages/_app.js``` 생성하여 사용   
 이후 ```styles/global.css``` 생성   
    </br> 
  
- **pre-rendering**    
  모든 자바스크립트를 하나의 html로 불러오는 것 아님. 각 페이지에 맞게 최소한의 자바스크립트가 담겨있는 html 미리생성해둠   
  ▪️정적생성(Static-Generation) -> 빌드시에 모든 html을 생성해놓고 요청이 들어오면 만들어둔 html을 재사용   
  ▪️서버사이드렌더링(Server-Side-Rendering) -> 사용자의 요청이 들어올때 마다 새로운 html 생성    
  더 자세한 정보는 블로그 참고! [Blog](https://gonggongnote.tistory.com/68)
      </br> 
     
- **하이브리드**      
  위 두가지 렌더링 방법을 선택적으로 사용가능하게 만들어 둠
  유저가 요청하기 전에 미리 페이지 만들어 둘 수 있나? 🙆🏻‍♀️ 정적생성  🙅🏻‍♀️ 서버사이드 랜더링
        </br> 
     
- **getStaticProps()**   
```javaScript
//생성할 페이지가 데이터를 포함하는 경우에 사용한다.
export async function getStaticProps(){
    const allPostsData = getSortedPostsData();
    return {
        props: {
            allPostsData
        }
    };
} 
```   
   생성할 페이지가 데이터를 포함해야하는 경우 getStaticProps라는 비동기 함수 또한 같이 내 보내야 한다.   
    getStaticProps 함수를 같이 내보내면 빌드시 함수가 실행되며 외부에서 데이터를 가져오고 가져온 데이터를 페이지의 props로 전달   
    👉 다른 js 파일에서는 사용할 수 없고 next.js pages 하위 폴더에 있는 페이지들만 getStaticProps를 사용할 수 있음 👈   
    ⭐️ 서버사이드에서만 작동함 클라이언트사이드에서는 작동하지 않음   
 </br> 
     
 - **Server-Side-Rendering(서버사이드렌더링)**   
   사용자가 요청할 때마다 html을 생성.   
   
```javaScript
   //  You should use getServerSideProps only if you need to pre-render a page
 export async function getServerSideProps(context) { 
 // 요청 시 마다 실행  
     props: {
       // props for your component
   },
   };
 } 
```   
 </br> 
     
- **getStaticPath()**  
 동적라우트, getStaticProps()처럼 외부데이터, API, 데이터베이스를 가져올 수 있다.   
 ```javaScript 
 export async function getStaticPaths() {
    // 빌드시에 한 번 실행
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
    // 🥕false : paths로 전달받은 외의 경로는 모두 404
    // 🥕true : 빌드시 생성되지 않은 페이지 접근할때 404에러가 아닌, fallback 페이지 전달 
}   
```
