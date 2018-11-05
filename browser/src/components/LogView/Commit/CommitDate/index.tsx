import * as React from 'react';
import { connect } from 'react-redux';
import { ActionedDetails } from '../../../../definitions';
import { RootState } from '../../../../reducers/index';

type AuthorProps = {
    result: ActionedDetails;
    locale: string;
};

// tslint:disable-next-line:function-name
function CommitDate(props: AuthorProps) {
    return (<div className='commit-date'>
        <span className='timestamp'>{formatDateTime(props.locale, props.result.date)}</span>
    </div>);
}

function formatDateTime(locale: string, date?: Date) {
    if (date && typeof date.toLocaleDateString !== 'function') {
        return '';
    }

    const dateOptions = { weekday: 'short', day: 'numeric', month: 'short', year: 'numeric', hour: 'numeric', minute: 'numeric' };
    try {
        locale = typeof locale === 'string' ? locale.replace('_', '-') : locale;
        return date.toLocaleString(locale, dateOptions);
    } catch {
        return date.toLocaleString(undefined, dateOptions);
    }
}

function mapStateToProps(state: RootState, wrapper: { result: ActionedDetails }) {
    return {
        result: wrapper.result,
        locale: state.vscode.locale
    };
}

export default connect(
    mapStateToProps
)(CommitDate);
