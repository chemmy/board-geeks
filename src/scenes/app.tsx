import React from 'react';
import { Layout } from 'antd';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Header from 'components/layout/header/header';
import Footer from 'components/layout/footer/footer';
import Home from './home/home';
import Library from './library/library';
import Gallery from './gallery/gallery';

const { Content } = Layout;

function App() {
  return (
    <div className="App">
      <Layout>
        <BrowserRouter>
          <Header />
          <Content>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/library" component={Library} />
              <Route exact path="/gallery" component={Gallery} />
            </Switch>
          </Content>
          <Footer />
        </BrowserRouter>
      </Layout>
    </div>
  );
}

export default App;
