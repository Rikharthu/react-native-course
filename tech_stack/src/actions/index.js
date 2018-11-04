// selectLibrary is an action creator
export const selectLibrary = libraryId => {
	console.log(`Selected library with id ${libraryId}`);
	return {
		type: 'select_library',
		payload: libraryId
	};
};
