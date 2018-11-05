import * as React from 'react';
import { connect } from 'react-redux';
import { ActionedDetails } from '../../../../definitions';
import { RootState } from '../../../../reducers/index';

type AuthorProps = {
    result: ActionedDetails;
    locale: string;
};

// tslint:disable-next-line:function-name
function AuthorOnly(props: AuthorProps) {
    return (<div className='commit-authoronly'>
        <span className='name hint--right hint--rounded hint--bounce' aria-label={props.result.email}>{props.result.name}</span>
    </div>);
}

function mapStateToProps(state: RootState, wrapper: { result: ActionedDetails }) {
    return {
        result: wrapper.result,
        locale: state.vscode.locale
    };
}

export default connect(
    mapStateToProps
)(AuthorOnly);
