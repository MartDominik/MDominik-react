export default function HeaderButton() {
    return (<div className="d-lg-none p-2 collapseBtnBack">
        <button className="btn collapseBtn" type="button" data-bs-toggle="offcanvas" data-bs-target="#mobileSidebar" aria-controls="mobileSidebar">
            ➔
        </button>
    </div>);
}