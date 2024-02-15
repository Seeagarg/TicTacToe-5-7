import { configureStore } from '@reduxjs/toolkit';
import tilesSlice from './slices/tilesSlice';
import playerSlice from './slices/playerSlice';
import modalSlice from './slices/modalSlice';
import tilesSliceDynamic from './slices/tilesSliceDynamic';
import tilesSliceHardMode from './slices/tilesSliceHard';
import gameOverSlice from './slices/gameOverSlice';
import tiles5Slice from './slices/tiles5Slice';
import grid7Slice from './slices/grid7Slice'


const store = configureStore({
  reducer: {
    tilesSlice: tilesSlice.reducer,
    tilesSliceDynamic:tilesSliceDynamic.reducer,
    playerSlice: playerSlice.reducer,
    modalSlice:modalSlice.reducer,
    tilesSliceHardMode:tilesSliceHardMode.reducer,
    gameOverSlice:gameOverSlice.reducer,
    tiles5Slice:tiles5Slice.reducer,
    grid7Slice:grid7Slice.reducer,
  },
});

export default store;
