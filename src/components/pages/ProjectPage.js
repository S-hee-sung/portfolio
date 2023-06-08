import React from 'react';
import PageWrap from '../../organize/templates/PageWrap';
import PageHeader from '../../organize/PageHeader';
import PortfolioMain from '../../organize/PortfolioMain';


function ProjectPage(props) {
  return (
    <PageWrap page="projects">
      <main>
        <PageHeader titleBg="Works">
          My <span className="point">Projects</span>
        </PageHeader>
        <section>
          <PortfolioMain />
        </section>     
      </main>
    </PageWrap>
  );
}

export default ProjectPage;