import { html } from "../../node_modules/lit-html/lit-html.js";
import { dataService } from "../dataService.js";
import { userHelper } from "../userHelper.js";

const detailsTemp = (item, isOwner) => html`
    <section id="details">
          <div id="details-wrapper">
            <img id="details-img" src=${item.imageUrl} alt="example1" />
            <p id="details-title">${item.model}</p>
            <div id="info-wrapper">
              <div id="details-description">
                <p class="year">Year: ${item.year}</p>
                <p class="mileage">Mileage: ${item.mileage} km.</p>
                <p class="contact">Contact Number: ${item.contact}</p>
                <p id = "motorcycle-description">
                    ${item.about}
                </p>
              </div>
               <!--Edit and Delete are only for creator-->
          <div id="action-buttons">
            ${isOwner ? html`
                <a href="/edit/${item._id}" id="edit-btn">Edit</a>
                <a @click=${deleteMotorche} href="javascript:void(0)" id="delete-btn">Delete</a>
            ` : console.log("ne si Owner")}
            
          </div>
            </div>
        </div>
      </section>
`;
let context = null;
export async function showDetails(ctx) {
    context = ctx;
    const id = ctx.params.id; //console.log(ctx.params);
    const data = await dataService.getSingleMotorche(id);
    // console.log(data)
    // console.log(userHelper.getUserID())

    //Ot tuka poqvat problemite
    let isOwner = userHelper.getUserID() === data._ownerId;
    

    ctx.render(detailsTemp(data, isOwner));
}

async function deleteMotorche(e) {

    const id = context.params.id;
    if(window.confirm("are you sure about this?")) {
        await dataService.deleteMotorche(id);
        context.goTo("/catalog")
    }
}