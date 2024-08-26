import {useEffect,useState} from 'react'
import { PostForm, Container } from '../Components'
import authservice from '../appwrite/configFor Database'
import { useNavigate,useParams } from 'react-router-dom'

function EditPost() {

const [post,setPosts] = useState(null);
const {slug} = useParams()
const navigate = useNavigate()

useEffect(() => {
 if(slug){
  appwriteService.getPost(slug).then((post)=>{
       if(post){
          setPosts(post)
       }
  })
 }else{
    navigate('/')
 }
}, [slug , navigate])


  return psot ?(
    <div className='py-8'>
        <Container>
              <PostForm post={post} />
        </Container>
    </div>
  ):null
}

export default EditPost