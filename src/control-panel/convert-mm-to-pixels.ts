const convertMMtoPixels =
    (ppi: number = 96) =>
    (mm: number) =>
        mm * (ppi / 25.4);

export default convertMMtoPixels;
