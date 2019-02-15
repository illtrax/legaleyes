/*
 *
 * Global actions
 *
 */
import { asyncActionCreator } from '../utils/actionCreator'

export const getWindowSize =
  asyncActionCreator('@legaleyes/global/GET_WINDOW_SIZE')

export const toggleSideBar =
  asyncActionCreator('@legaleyes/global/TOGGLE_SIDE_BAR')
