import type { HttpContext } from '@adonisjs/core/http'
import axios from 'axios';

export default class WebpagesController {

    async lvl2Calculate({ request, response }: HttpContext) {
        const { materialBase, materialHd, bsb, hammerAttemptCost } = request.body();
        console.log('oi')
        const { data } = await axios.post('/api/calculate-lvl-2/', {
            materialBase, materialHd, bsb, hammerAttemptCost
        }, {
            headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
            }
        })
        
        return response.redirect(`/lvl2/?output=${data?.result}`)
    }

    lvl2Render({ view }: HttpContext) {
        return view.render('pages/lvl2/lvl2')
     }
}