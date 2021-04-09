import {Component} from 'react';

 class ErrorBoundary extends Component {
     constructor(props) {
         super(props);
         this.state = {hasError:false}
     }
 static getDerivedStateFromError(error){
        return {hasError:true}
}

componentDidCatch(error){
    console.log('Has some error from componenDidCatch',error);
}

     render() { 
if(this.state.hasError){
    return <h1>Im sorry but something get wrong!'</h1>
}
         return this.props.children;
     }
 }
  
 export default ErrorBoundary;