import React from "react";
import { render, act } from "@testing-library/react";
import App from "./App";
import { fetchShow as mockFetchShow } from './api/fetchShow'
import responseData from './utils/mockEpisodeData'

jest.mock('./api/fetchShow')

test('API call works on mount', () => {
    mockFetchShow.mockResolvedValueOnce(responseData)
    render(<App></App>)

})
