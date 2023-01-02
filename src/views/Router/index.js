import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { ContactView, DetailProjectView, DetailTeamView, NotFoundView, AboutView, IndexView, ProjectsView, ServiceDetailView  } from '..';

import paths from './paths';
import PrivateRoute from './PrivateRoute';










const RouterComponent = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path={paths.ROOT} element={<IndexView/>} />
        <Route exact path={paths.ABOUT} element={<AboutView/>} />
        <Route exact path={paths.PROJECTS} element={<ProjectsView/>} />
        <Route exact path={paths.PROJECT} element={<DetailProjectView/>} />
        <Route path={paths.PROJECT} element={<DetailProjectView/>} />
        <Route exact path={paths.CONTACT} element={<ContactView/>} />
        <Route exact path={paths.SERVICES} element={<ServiceDetailView/>} />
        <Route path={paths.TEAMMEMBER} element={<DetailTeamView/>} />
        
        <Route element={<NotFoundView/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouterComponent;
