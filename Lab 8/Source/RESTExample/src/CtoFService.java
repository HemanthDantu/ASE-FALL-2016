/**
 * @author ry6d3
 *
 */
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.Response;
import org.json.JSONException;
import org.json.JSONObject;
 
@Path("/area")
public class CtoFService {
 

	  @Path("{f}")
	  @GET
	  @Produces("application/json")
	  public Response convertFtoCfromInput(@PathParam("f") double f) throws JSONException {
 
		JSONObject jsonObject = new JSONObject();
		double feet,inch ;
		feet=(f*0.0328084);
		inch=(f*0.393701);
		jsonObject.put("cm",f);
		jsonObject.put("feet",feet);
		jsonObject.put("inch", inch);
		String result =  ""+ jsonObject;
		return Response.status(200).entity(result).build();
	  }
}