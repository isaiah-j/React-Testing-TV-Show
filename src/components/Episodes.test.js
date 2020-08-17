import React from "react";
import { render } from "@testing-library/react";
import Episodes from "./Episodes";
import responseData from '../utils/mockEpisodeData'

let episodesData = responseData._embedded.episodes



test("renders App without crashing", () => {
    render(<Episodes episodes={[]} />);
});

test('re-renders with list of episodes', () => {
    const { rerender, getAllByTestId, queryAllByTestId } = render(<Episodes episodes={[]}></Episodes>)

    // Check that no episodes are being rendered initially
    let episodeList = queryAllByTestId(/episode/i)
    expect(episodeList).toHaveLength(0)


    // re-render component and see if 26 episodes are being rendered
    rerender(<Episodes episodes={episodesData}></Episodes>)
    episodeList = queryAllByTestId(/episode/i)
    expect(episodeList).toHaveLength(26)

})