
export function inputFilter(invalidCharCodes) {
    return (event) => {
        if (invalidCharCodes.contains(event.charCode)) {
            event.preventDefault();
        }
    };
}

const invalidEmailCharCodes = [32];