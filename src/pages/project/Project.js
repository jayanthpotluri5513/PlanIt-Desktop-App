import React from 'react'
import { useDocument } from '../../hooks/useDocument'
import { useParams} from 'react-router-dom'
import'./Project.css'
import ProjectSummary from './ProjectSummary'
import ProjectComments from './ProjectComments'
function Project() {
  const { id } = useParams()
  const {error, document} =useDocument('projects', id)

  if(error){
    return <div className='error'>{error}</div>
  }

  if(!document){
    return <div className='loading'>Loading.....</div>
  }
  return (
    <div className='project-details'>
      <ProjectSummary project={document} />
      <ProjectComments project={document} />
      </div>
  )
}

export default Project