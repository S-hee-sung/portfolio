import React from 'react';
import PageWrap from '../../organize/templates/PageWrap';
import PageHeader from '../../organize/PageHeader';


function ProjectPage(props) {
  return (
    <PageWrap page="projects">
      <main>
        <PageHeader titleBg="Works">
          My <span className="point">Projects</span>
        </PageHeader>
        <section>
          
        </section>     
      </main>
    </PageWrap>
  );
}

export default ProjectPage;