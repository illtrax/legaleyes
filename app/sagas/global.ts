import { put, takeEvery } from 'redux-saga/effects'
import { getWindowSize } from '../actions/global'

function* doGetWindowSize( action: any ) {
	yield put( getWindowSize.success({
		width: window.document.body.clientWidth,
		height: window.document.body.clientHeight,
	}))
}

const globalSaga = [
  	takeEvery( getWindowSize.REQUEST, doGetWindowSize )
]

export default globalSaga
