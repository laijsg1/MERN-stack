const contentNode = document.getElementById('contents');

class IssueFilter extends React.Component{
    render() {
        return (
            <div>This is a placeholder for the issue filter.</div>
        );
    }
}
class IssueTable extends React.Component{
    render() {
        return (
            <div>This is a placeholder for a table of Issues .</div>
        );
    }
}
class IssueAdd extends React.Component{
    render() {
        return (
            <div>This is a placeholder for an issue Add entry form .</div>
        );
    }
}
class IssueList extends React.Component{
    render() {
        return (
            <div>
            <h1>Issues Tracker</h1>
            <IssueFilter/>
            <hr />
            
            <IssueTable/>
            <hr />
            
            <IssueAdd/>
            
            </div>
        );
    }
}


ReactDOM.render(<IssueList />, contentNode);      // Render the component inside the content Node
