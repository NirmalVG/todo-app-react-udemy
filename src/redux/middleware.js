import { ADD_TODO } from "./actions";

import { takeEvery } from "redux-saga/effects";

export function* addTodo() {
    yield takeEvery(ADD_TODO, function* () {
        // We can perform async operations here
        // No need of async calls for now
    });
}

// eslint-disable-next-line import/no-anonymous-default-export
export default function* () {
    yield* addTodo();
}
