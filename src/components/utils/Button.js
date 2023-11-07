export const Button = (prop) => {
    const show = () => {
        prop.setSeeText((prev) => !prev);
    };
    return (
        <>
        <button type="button" className="btn btn-outline-secondary btn-lg" onClick={show}>Aprinde lumina</button>
        </>
    );
}