import React from 'react';
import { Layout } from 'antd';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { ROUTES } from 'constants/routes';
import Header from 'components/layout/header/header';
import Footer from 'components/layout/footer/footer';
import Home from './home/home';
import Library from './library/library';
import Gallery from './gallery/gallery';
import Components from './components/components';

const { Content } = Layout;

function App() {
  return (
    <div className="App">
      <Layout>
        <BrowserRouter>
          <Header />
          <Content>
            <Switch>
              <Route exact path={ROUTES.HOME} component={Home} />
              <Route exact path={ROUTES.LIBRARY} component={Library} />
              <Route exact path={ROUTES.GALLERY} component={Gallery} />
              <Route exact path={ROUTES.COMPONENTS} component={Components} />
            </Switch>
          </Content>
          <Footer />
        </BrowserRouter>
      </Layout>
    </div>
  );
}

export default App;
