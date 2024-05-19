import { useParams } from "react-router-dom"

function ProductDetail() {
  const params = useParams()
  console.log('parms', params)
  return(
    <h1>Ini halaman productDetail: {params.id}</h1>
  )
}
export default ProductDetail;