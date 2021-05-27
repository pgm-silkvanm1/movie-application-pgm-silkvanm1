import { useState, useEffect } from 'react';

import { useFirestore } from "../../contexts/firebase/firestore.context";

import ProjectListItem from './ProjectListItem';

const ProjectList = ({itemsPerPage = 10}) => {
  const [ projects, setProjects ] = useState();
  const [ lastVisible, setLastVisible ] = useState(null);
  const [ loadMoreCounter, setLoadMoreCounter ] = useState(1);
  const { getPagedProjects } = useFirestore();

  useEffect(() => {
    const fetchData = async () => {
      const data = await getPagedProjects(itemsPerPage, lastVisible);
      setLastVisible(data.lastVisibleDoc);
      setProjects(data.projects);
    }

    fetchData();    
  }, [itemsPerPage, getPagedProjects, loadMoreCounter]);

  return (
    <div className="project-list">
      {!!projects && projects.map(project => {
        return (
          <ProjectListItem key={project.uid} project={project} />
        )
      })}
      {!!projects && (projects.length >= itemsPerPage) && <button onClick={() => setLoadMoreCounter(loadMoreCounter + 1)}>MORE</button>}
    </div>
  )
};

export default ProjectList;