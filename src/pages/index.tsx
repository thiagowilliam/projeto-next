import {useEffect, useState} from 'react';

interface IProduct{
  id: string;
  title: string;
}

export default function Home() {
  const [recommendedProduts, setRecommendedProducts] = useState<IProduct[]>([]);

  useEffect(() => {
    fetch('http://localhost:3333/recommended').then(response => {
      response.json().then(data => {
        setRecommendedProducts(data)
      })
    })
  }, []);
  return (
    <div>
      <section>
        <h1>Products</h1>

        <ul>
          {recommendedProduts.map(recommendedProduts => {
            return(
              <li key={recommendedProduts.id}>
                {recommendedProduts.title}
              </li>
            );
          })}
        </ul>
      </section>
    </div>
  )
}
